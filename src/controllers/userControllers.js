import User from "../models/User"

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" })
export const postJoin = async (req, res) => {
    const { name, username, email, password, password2, location } = req.body
    const pageTitle = "pageTitle"
    if (password !== password2) {
        return res.status(400).render("join", {
            pageTitle,
            errorMessage: "Password confirmation does not match"
        })
    }
    const exists = await User.exists({ $or: [{ username }, { email }] })
    if (exists) {
        return res.status(400).render("join", {
            pageTitle,
            errorMessage: "This username/email is already taken"
        })
    }
    try {
        await User.create({
            name,
            username,
            email,
            password,
            location
        })
        return res.redirect("/login")
    } catch (error) {
        return res.status(400).render("join", {
            pageTitle: "Join",
            errorMessage: error._message
        })
    }
}
export const edit = (req, res) => res.send("edit user")
export const remove = (req, res) => res.send("delete user")
export const getLogin = (req, res) => res.render("login", { pageTitle: "Log In" })
export const postLogin = async (req, res) => {
    const { username, password } = req.body
    const exists = await User.exists({ username })
    if (!exists) {
        return res.status(400).render("login", { pageTitle: "Login", errorMessage: "This username dose not exists" })
    }
    // check if account exists
    // check if password correct
    res.end()
}
export const logout = (req, res) => res.send("logout")
export const see = (req, res) => res.send("see user")