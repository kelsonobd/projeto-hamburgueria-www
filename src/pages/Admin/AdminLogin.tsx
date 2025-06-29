import Container from "@/components/ui/Container"
import { Input } from "@/components/ui/input";
import { TypographyH1 } from "@/components/ui/Typography"
import { TypographyH2 } from "@/components/ui/Typography"




const AdminLogin = () => {
    return (
        <>
            <Container className="flex flex-col justify-center items-center bg-[#5EABD6] w-full min-h-screen ">
                <TypographyH1>Painel Administrativo</TypographyH1>
                <div className="w-[500px] h-[300px] flex flex-col justify-center gap-4 p-[20px] bg-[#5EABD6]">
                    <div className="flex flex-col">
                        <TypographyH2 className="text-[20px]">Faça o login :</TypographyH2>
                        <Input className="w-[]"
                            type="email" placeholder="Email" />
                    </div>
                       <div className="flex flex-col">
                        <TypographyH2 className="text-[20px]">Insira a senha</TypographyH2>
                        <Input className=""
                            type="password" placeholder="Senha" />
                    </div>
                </div>
            </Container>


        </>
    )
}

export default AdminLogin;