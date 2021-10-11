import type { NextPage } from 'next';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/pageTitle/pageTitle';
import UserInformation from 'ui/components/data-display/userInformation/userInformation';
import TextFieldMask from 'ui/components/inputs/textFieldMask/textFieldMask';
import { Button, Typography, Container, CircularProgress } from '@mui/material';
import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from 'ui/styles/pages/index.style';
import useIndex from 'data/hooks/pages/useIndex.page';

const Home: NextPage = () => {
  const {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes,
  } = useIndex();
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

          {erro && <Typography color={'error'}>{erro}</Typography>}

          <Button
            variant={'contained'}
            color={'secondary'}
            sx={{ width: '220px' }}
            disabled={!cepValido || carregando}
            onClick={() => buscarProfissionais(cep)}
          >
            {carregando ? <CircularProgress size={20} /> : 'Buscar'}
          </Button>
        </FormElementsContainer>

        {buscaFeita &&
          (diaristas.length > 0 ? (
            <ProfissionaisPaper>
              <ProfissionaisContainer>
                {diaristas.map((item, index) => {
                  return (
                    <UserInformation
                      key={index}
                      name={item.nome_completo}
                      picture={item.foto_usuario}
                      rating={item.reputacao}
                      description={item.cidade}
                    />
                  );
                })}
              </ProfissionaisContainer>
              <Container sx={{ textAlign: 'center' }}>
                {diaristasRestantes > 0 && (
                  <Typography sx={{ mt: 5 }}>
                    ...e mais {diaristasRestantes}{' '}
                    {diaristasRestantes > 1
                      ? 'profissionais disponíveis'
                      : 'profissional disponível'}{' '}
                    para seu endereço.
                  </Typography>
                )}
                <Button
                  variant={'contained'}
                  color={'secondary'}
                  sx={{ mt: 5 }}
                >
                  Contratar diarista
                </Button>
              </Container>
            </ProfissionaisPaper>
          ) : (
            <Typography align={'center'} color={'textPrimary'}>
              Sem diaristas disponíveis na sua região.
            </Typography>
          ))}
      </Container>
    </div>
  );
};

export default Home;
