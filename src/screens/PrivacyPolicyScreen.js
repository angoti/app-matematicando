import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

const PrivacyPolicyScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Política de Privacidade</Text>

      <View style={styles.section}>
        <Text style={styles.paragraph}>
          A sua privacidade é importante para nós. É política do aplicativo
          respeitar a sua privacidade em relação a qualquer informação sua que
          possamos coletar.
        </Text>
        <Text style={styles.paragraph}>
          Solicitamos informações pessoais apenas quando realmente precisamos
          delas para lhe fornecer um serviço. Fazemo-lo por meios justos e
          legais, com o seu conhecimento e consentimento. Também informamos por
          que estamos coletando e como será usado.
        </Text>
        <Text style={styles.paragraph}>
          Apenas retemos as informações coletadas pelo tempo necessário para
          fornecer o serviço solicitado. Quando armazenamos dados, protegemos
          dentro de meios comercialmente aceitáveis para evitar perdas e roubos,
          bem como acesso, divulgação, cópia, uso ou modificação não
          autorizados.
        </Text>
        <Text style={styles.paragraph}>
          Não compartilhamos informações de identificação pessoal publicamente
          ou com terceiros, exceto quando exigido por lei.
        </Text>
        <Text style={styles.paragraph}>
          O nosso aplicativo pode ter links para sites externos que não são
          operados por nós. Esteja ciente de que não temos controle sobre o
          conteúdo e práticas desses sites e não podemos aceitar
          responsabilidade por suas respectivas políticas de privacidade.
        </Text>
        <Text style={styles.paragraph}>
          Você é livre para recusar a nossa solicitação de informações pessoais,
          entendendo que talvez não possamos fornecer alguns dos serviços
          desejados.
        </Text>
        <Text style={styles.paragraph}>
          O uso continuado de nosso aplicativo será considerado como aceitação
          de nossas práticas em torno de privacidade e informações pessoais. Se
          você tiver alguma dúvida sobre como lidamos com dados do usuário e
          informações pessoais, entre em contato conosco.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Compromisso do Usuário</Text>
        <Text style={styles.paragraph}>
          O usuário se compromete a fazer uso adequado dos conteúdos e da
          informação que o aplicativo oferece e com caráter enunciativo, mas não
          limitativo:
        </Text>
        <Text style={styles.paragraph}>
          A) Não se envolver em atividades que sejam ilegais ou contrárias à boa
          fé e à ordem pública;
        </Text>
        <Text style={styles.paragraph}>
          B) Não difundir propaganda ou conteúdo de natureza racista,
          xenofóbica, bet ou azar, qualquer tipo de pornografia ilegal, de
          apologia ao terrorismo ou contra os direitos humanos;
        </Text>
        <Text style={styles.paragraph}>
          C) Não causar danos aos sistemas físicos (hardwares) e lógicos
          (softwares) do aplicativo, de seus fornecedores ou terceiros, para
          introduzir ou disseminar vírus informáticos ou quaisquer outros
          sistemas de hardware ou software que sejam capazes de causar danos
          anteriormente mencionados.
        </Text>
      </View>

      <View style={styles.section} />
      <Text style={styles.paragraph}>
        Esta política é efetiva a partir de 10 Novembro de 2024.
      </Text>
      <View style={styles.section} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#444',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'justify',
    color: '#555',
    marginBottom: 10,
  },
});

export default PrivacyPolicyScreen;
