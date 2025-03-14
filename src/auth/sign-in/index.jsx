import { SignIn } from "@clerk/clerk-react"

function SignInPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-background">
            <SignIn routing="path" path="/auth/sign-in" />
        </div>
    )
}

export default SignInPage
