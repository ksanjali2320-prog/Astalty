import LeftSection from "./components/LeftSection";
import LoginUpForm from "./components/LoginUpForm";

export default function LoginPage(){
    return(
       <div className="min-h-screen flex flex-col md:flex-row">
        <LeftSection />
        <LoginUpForm />
       </div>
    )
}



