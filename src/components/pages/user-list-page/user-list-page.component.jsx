import { Paper, Typography, Box } from '@mui/material';
import MainLayout from '@/components/templates/main-layout/main-layout.component';
import './user-list-page.component.scss';

const propTypes = {};

const UserListPage = () => {
  return (
    <MainLayout>
      <Box className="user-list-page">
        <Paper className="user-list-paper" elevation={3}>
          <Typography className="user-list-title" variant="h4" gutterBottom>
            User List
          </Typography>
          {/* Aqui vamos adicionar a tabela de listagem de usuários */}
          <Box className="user-list-description">
            <Typography variant="body1">
              Aqui você pode ver todos os usuários cadastrados no sistema.
            </Typography>
          </Box>
        </Paper>
      </Box>
    </MainLayout>
  );
};

UserListPage.propTypes = propTypes;

export default UserListPage;
