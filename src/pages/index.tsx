import type { NextPage } from 'next';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/pageTitle/pageTitle';
import UserInformation from 'ui/components/data-display/userInformation/userInformation';
import TextFieldMask from 'ui/components/inputs/textFieldMask/textFieldMask';
import { Button } from '@mui/material';

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={'Conheça os profissionais'}
        subTitle={
          'Preencha seu endereço abaixo e veja todos os profissionais da sua localidade.'
        }
      />
      <TextFieldMask
        mask={'99.999-999'}
        label={'Digite seu Cep:'}
        fullWidth
        variant={'outlined'}
      />
      <Button variant={'contained'}>Buscar</Button>

      <UserInformation
        name={'Diarista'}
        picture={'/img/diaristas/diarista01.jpeg'}
        rating={3}
        description={'Rio de Janeiro'}
      />
      <UserInformation
        name={'Diarista'}
        picture={'/img/diaristas/diarista02.png'}
        rating={3}
        description={'Rio de Janeiro'}
      />
    </div>
  );
};

export default Home;
