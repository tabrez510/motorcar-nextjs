import { Box } from '@mui/material';
import Sidebar from '@/components/common/Sidebar';
import { Container, SidebarWrapper, FixedSidebar, Content } from '@/app/(main)/layout.styles';


export default function MainLayout({ children }) {
  return (
    <Container>
        <SidebarWrapper>
            <FixedSidebar>
                <Sidebar />
            </FixedSidebar>
        </SidebarWrapper>
        <Content>
          {children}
        </Content>
    </Container>
  );
}
