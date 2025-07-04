import CardLink from "@/components/ui/CardLink";
import Container from "@/components/ui/Container";
import { TypographyH1 } from "@/components/ui/Typography";
import BreadcrumbRouter from "@/components/BreadcrumbRouter";

// src/pages/admin/AdminHome.tsx
const PainelAdminHome = () => {



  return (
    <Container className="h-screen flex flex-col items-center justify-center bg-[#c49b5f] pl-4">     
      <TypographyH1 className="text-[40px] ">Painel Administrativo</TypographyH1>
    <div className="w-200px w-full p-2 text-white text-4xl">
      <BreadcrumbRouter/>
      </div>
      <div className="w-full h-[600px]  bg-[#c49b5f] flex items-center justify-center gap-4">
        <CardLink to="/admin/cadastro">Cadastrar Produto</CardLink>
        <CardLink to="/admin/lista">Lista de Produtos</CardLink>
        <CardLink to="/admin/editar">Editar Produto</CardLink>
        <CardLink to="/admin/excluir">Excluir Produto</CardLink>
        
      </div>
    </Container>
  );
};

export default PainelAdminHome;
