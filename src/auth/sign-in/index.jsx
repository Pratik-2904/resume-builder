import { SignIn } from "@clerk/clerk-react"

function SignInPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-background">
            <SignIn />
        </div>
    )
}

export default SignInPage
