
import LeftSection from "./components/LeftSection";
import SignupForm from "./components/SignupForm";

export default function SignUpPage(){
    return(
        <div className="min-h-screen flex flex-col md:flex-row">
        <LeftSection />
        <SignupForm />
    </div>
    )
}