import { clerkClient } from "@clerk/express";

// Middleware to check userId and hashPremium paln
export const auth = async (req, res, next)=>{
    try {
        console.log("occured in middlewire")
        const {userId, has} = await req.auth();
        const hasPremiumPlan = await has({plan: 'premium'});
        const user = await clerkClient.users.getUser(userId);
        if(!hasPremiumPlan && user.privateMetadata.free_usage){
            req.free_usage = user.privateMetadata.free_usage
            console.log("if statement implimented in middleware")
        }
        else{
            await clerkClient.users.updateUserMetadata(userId,{
                privateMetadata:{
                    free_usage: 0
                }
            })
            req.free_usage = 0
            console.log("else statement implimented in middleware")
        }
        console.log("req plan is probably found")
        req.plan = hasPremiumPlan ? 'premium' : 'free';
        next()
    } catch (error) {
        console.log("Error occured")
        res.json({success: false, message : error.message})
    }
}