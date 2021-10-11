import type { NextPage } from 'next';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/pageTitle/pageTitle';
import UserInformation from 'ui/components/data-display/userInformation/userInformation';
import TextFieldMask from 'ui/components/inputs/textFieldMask/textFieldMask';
import { Button, Typography, Container } from '@mui/material';
import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from 'ui/styles/pages/index.style';
import useIndex from 'data/hooks/pages/useIndex.page';

const Home: NextPage = () => {
  const { cep, setCep } = useIndex();
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={'Conheça os profissionais'}
        subTitle={
          'Preencha seu endereço abaixo e veja todos os profissionais da sua localidade.'
        }
      />

      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={'99.999-999'}
            label={'Digite seu Cep:'}
            fullWidth
            variant={'outlined'}
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />
          <Typography color={'error'}>Cep inválido</Typography>
          <Button
            variant={'contained'}
            color={'secondary'}
            sx={{ width: '220px' }}
          >
            Buscar
          </Button>
        </FormElementsContainer>

        <ProfissionaisPaper>
          <ProfissionaisContainer>
            <UserInformation
              name={'Josefina'}
              picture={'/img/diaristas/diarista02.png'}
              rating={4}
              description={'Rio de Janeiro'}
            />
            <UserInformation
              name={'Maria'}
              picture={'/img/diaristas/diarista01.jpeg'}
              rating={4}
              description={'Rio de Janeiro'}
            />
            <UserInformation
              name={'Cristina'}
              picture={'/img/diaristas/diarista02.png'}
              rating={4}
              description={'Rio de Janeiro'}
            />
            <UserInformation
              name={'Rafaela'}
              picture={'/img/diaristas/diarista01.jpeg'}
              rating={4}
              description={'Rio de Janeiro'}
            />
            <UserInformation
              name={'Lana'}
              picture={'/img/diaristas/diarista02.png'}
              rating={4}
              description={'Rio de Janeiro'}
            />
            <UserInformation
              name={'Katia'}
              picture={'/img/diaristas/diarista01.jpeg'}
              rating={4}
              description={'Rio de Janeiro'}
            />
          </ProfissionaisContainer>
        </ProfissionaisPaper>
      </Container>
    </div>
  );
};

export default Home;
