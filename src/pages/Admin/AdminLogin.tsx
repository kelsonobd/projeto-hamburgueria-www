import Container from "@/components/ui/Container"
import { Input, } from "@/components/ui/input";
import { TypographyH1, TypographyH2 } from "@/components/ui/Typography"
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "@/graphql/mutations/login";
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";
import { useState } from "react";



const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();
    const [fazerLogin, { loading, error }] = useMutation(LOGIN_MUTATION)

    const handleLogin = async () => {
        try {
            const { data } = await fazerLogin({
                variables: {
                    email,
                    senha
                },
            });

            const token = data.login.token

            localStorage.setItem("token", token);

            navigate("/painel");
        } catch(err){
            console.log("Erro no login", err);
            alert("Email ou senha inválidos")
        }
       
    }

    return (
        <>
            <Container className="flex flex-col justify-center items-center bg-gradient-to-br from-[#3E2723] via-[#4E342E] to-[#212121] w-full min-h-screen ">
                <div className="w-[500px] h-[350px] flex flex-col justify-center gap-4 p-[20px] bg-[#F5F5DC] p-8 rounded-xl shadow-lg w-[90%] max-w-[500px]">
                    <TypographyH1 className="text-[30px] text-center">Painel Administrativo</TypographyH1>
                    <div className="flex flex-col">
                        <TypographyH2 className="text-[20px]">Faça o login :</TypographyH2>
                        <Input className=""
                            type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <TypographyH2 className="text-[20px]">Insira a senha</TypographyH2>
                        <Input className=""
                            type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                    </div>
                    <Button className="bg-[#C62828] text-[15px] text-white" onClick={handleLogin}>Entrar</Button>
                    <div className=" flex justify-between">
                        <Link className="" to="">Cadastrar</Link>
                        <Link to="">Esqueceu a senha?</Link>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default AdminLogin;



