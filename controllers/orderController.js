import userModel from '../models/userModel.js';
import orderModel from './../models/orderModel.js'

// placing order using COD methods
const placeOrder = async (req,res) => {
    try {

        const {userId, items, amount, address} = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethode:"COD",
            payment:false,
            date:Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpade(userId,{cartData:{}})

        res.json({success : true, message:"order Placed"})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
        
    }

}


// placing order using Stripe methods
const placeOrderStripe = async (req,res) => {
    
}


// placing order using Razorpay methods
const placeOrderRazorpay = async (req,res) => {
    
}

// All Orders Data for Admin Panel
const allOrders = async (req,res) => {
    
}

// User Orders Data for Admin Panel
const userOrders = async (req,res) => {
    
}

// update order status from Admin Panel
const updateStatus = async (req,res) => {
    
}

export {placeOrder, placeOrderStripe, placeOrderRazorpay,allOrders,userOrders,updateStatus}