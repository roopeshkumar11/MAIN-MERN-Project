import { Message } from "../Models/Message.modal.js";

const sendMessage = async (req, res) => {
    try {
        const { Email } = req.body;

        const existingMessage = await Message.findOne({ Email });

        if (existingMessage) {
            return res.status(200).json({ message: "Already messaged. Use a new email to send data." });
        }

        const newMessage = new Message(req.body);
        await newMessage.save();

        res.status(201).json({ message: "Message saved successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error." });
    }
};




const getAllMessages = async (req, res) => {
    try {
        const allmsg = await Message.find();  
        res.status(200).json(allmsg); 
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: "Internal server error." }); 
    }
};


export { sendMessage,getAllMessages };