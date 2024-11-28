import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

const TermsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Termos de Uso e Serviço</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. Termos</Text>
        <Text style={styles.paragraph}>
          Ao utilziar o aplicativo, você concorda em cumprir estes termos de
          serviço, todas as leis e regulamentos aplicáveis e assume a
          responsabilidade pelo cumprimento de todas as leis locais aplicáveis.
          Caso não concorde com algum destes termos, está proibido de usar ou
          acessar este aplicativo. Os materiais contidos neste aplicativo são
          protegidos pelas leis de direitos autorais e marcas comerciais
          aplicáveis.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. Uso de Licença</Text>
        <Text style={styles.paragraph}>
          É concedida permissão para baixar temporariamente uma cópia dos
          materiais (informações ou software), apenas para visualização
          transitória pessoal e não comercial. Esta é a concessão de uma
          licença, não uma transferência de título, e, sob esta licença, você
          não pode:
        </Text>
        <Text style={styles.list}>• Modificar ou copiar os materiais;</Text>
        <Text style={styles.list}>
          • Usar os materiais para qualquer finalidade comercial ou exibição
          pública;
        </Text>
        <Text style={styles.list}>
          • Tentar descompilar ou fazer engenharia reversa de qualquer software;
        </Text>
        <Text style={styles.list}>
          • Remover quaisquer direitos autorais ou outras notações de
          propriedade;
        </Text>
        <Text style={styles.list}>
          • Transferir os materiais para outra pessoa ou 'espelhar' em outro
          servidor.
        </Text>
        <Text style={styles.paragraph}>
          Esta licença será automaticamente rescindida se você violar alguma
          dessas restrições, e poderá ser revogada a qualquer momento. Ao
          encerrar a visualização dos materiais ou após o término da licença,
          você deve apagar todos os materiais baixados em sua posse, seja em
          formato eletrônico ou impresso.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>3. Isenção de responsabilidade</Text>
        <Text style={styles.paragraph}>
          Os materiais no aplicativo são fornecidos 'como estão'. O aplicativo
          não oferece garantias, expressas ou implícitas, e, por este meio,
          isenta e nega todas as outras garantias, incluindo garantias de
          comercialização, adequação a um fim específico ou não violação de
          propriedade intelectual ou outros direitos.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>4. Limitações</Text>
        <Text style={styles.paragraph}>
          Em nenhum caso o aplicativo ou seus fornecedores serão responsáveis
          por quaisquer danos (incluindo, sem limitação, perda de dados ou
          lucro) decorrentes do uso ou incapacidade de usar os materiais no
          aplicativo, mesmo que tenham sido notificados sobre a possibilidade de
          tais danos.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>5. Precisão dos Materiais</Text>
        <Text style={styles.paragraph}>
          Os materiais no aplicativo podem incluir erros técnicos, tipográficos
          ou fotográficos. Não garantimos que qualquer material em seu
          aplicativo seja preciso, completo ou atual. O aplicativo pode fazer
          alterações nos materiais a qualquer momento, sem aviso prévio.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>6. Links</Text>
        <Text style={styles.paragraph}>
          A aplicativo não é responsável pelo conteúdo de aplicativos vinculados
          e não endossa necessariamente esses aplicativos. O uso de aplicativos
          vinculados é por conta e risco do usuário.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Modificações</Text>
        <Text style={styles.paragraph}>
          Podemos revisar estes termos de serviço a qualquer momento, sem aviso
          prévio. Ao usar este aplicativo, você concorda em ficar vinculado à
          versão atual desses termos de serviço.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Lei Aplicável</Text>
        <Text style={styles.paragraph}>
          Estes termos são regidos e interpretados de acordo com a legislação em
          vigor, e você se submete à jurisdição exclusiva dos tribunais locais.
        </Text>
      </View>
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
    marginTop: 10,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    color: '#555',
  },
  list: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
    color: '#555',
  },
});

export default TermsScreen;
