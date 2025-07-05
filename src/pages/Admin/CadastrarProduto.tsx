import Container from "@/components/ui/Container"
import { TypographyH1 } from "@/components/ui/Typography"
import BreadcrumbRouter from "@/components/BreadcrumbRouter"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const CadastrarProduto = () => {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");
    const [imagem, setImagem] = useState<File | null>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    console.log("Produto a cadastrar");
    console.log({ nome, descricao, preco, imagem })


    return (
        <Container className="min-h-screen flex flex-col items-center justify-center bg-[#c49b5f] pl-4">
            <div className="w-full p-2 text-white text-4xl">
                <BreadcrumbRouter />
            </div>
            <TypographyH1 className="text-[40px]">Cadastro de Produtos</TypographyH1>

            <form onSubmit={handleSubmit} className="w-full h-[500px]  gap-4 flex flex-col justify-center items-center">
                <div>
                    <Label htmlFor="nome">
                        Nome do Produto:
                    </Label>
                    <Input
                        id="nome"
                        type="text"
                        placeholder="Ex: X-burguer"
                        className="w-[350px] bg-white mt-[8px]"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div>
                    <Label htmlFor="descricao">Descrição:</Label>
                    <Textarea

                        id="descricao"
                        placeholder="Descrição do produto"
                        className="w-[350px] h-[100px] bg-white resize-none mt-[8px]"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                    />
                </div>
                <div>
                    <Label htmlFor="preco">Preço:</Label>
                    <Input
                        className="w-[350px] bg-white mt-[8px]"
                        id="preco"
                        type="number"
                        step="0.01"
                        min="0"
                        placeholder="12.99"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                    />
                </div>
                <div>
                    <Label htmlFor="imagem">Inserir Imagem:</Label>
                    <Input
                        className="w-[350px] bg-white mt-[8px]"
                        id="imagem"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImagem(e.target.files?.[0] || null)}
                    />
                </div>
                <Button type="submit" className="bg-white">Cadastrar</Button>
            </form>

        </Container>
    )
}

export default CadastrarProduto