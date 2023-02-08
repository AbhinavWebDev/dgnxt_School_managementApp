import userModel from "../Models/userModel.js"

export const loginUser = async (req, res) => {
    const { userName, password } = req.body

    try {
        const User = await userModel.findOne({ userName: userName })
        if (User) {
            const validity = (password === User.password)
            if (!validity) {
                res.status(400).json({ "Message": "Wrong Password" })
            }
            else {
                res.status(200).json({ User })
            }
        }
        else {
            res.status(400).json({ "Message": "User Not Exist" })
        }
    } catch (error){
        res.status(400).json({error})
    }
}