import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Keyboard } from 'react-native';

const IMCCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [imc, setImc] = useState(null);
  const [classification, setClassification] = useState('');
  const [error, setError] = useState('');

  const calculateIMC = () => {
    Keyboard.dismiss();

    // Validação dos campos
    if (!weight || !height) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    const weightNum = parseFloat(weight.replace(',', '.'));
    const heightNum = parseFloat(height.replace(',', '.'));

    if (isNaN(weightNum) || isNaN(heightNum)) {
      setError('Por favor, insira valores numéricos válidos');
      return;
    }

    if (weightNum <= 0 || heightNum <= 0) {
      setError('Peso e altura devem ser maiores que zero');
      return;
    }

    if (heightNum > 3) {
      setError('Altura deve ser em metros (ex: 1.75)');
      return;
    }

    setError('');

    // Cálculo do IMC
    const imcValue = weightNum / (heightNum * heightNum);
    setImc(imcValue.toFixed(2));

    // Classificação
    if (imcValue < 18.5) {
      setClassification('Abaixo do peso');
    } else if (imcValue >= 18.5 && imcValue <= 24.9) {
      setClassification('Peso normal');
    } else if (imcValue >= 25 && imcValue <= 29.9) {
      setClassification('Sobrepeso');
    } else if (imcValue >= 30 && imcValue <= 34.9) {
      setClassification('Obesidade grau I');
    } else if (imcValue >= 35 && imcValue <= 39.9) {
      setClassification('Obesidade grau II');
    } else {
      setClassification('Obesidade grau III');
    }
  };

  const resetFields = () => {
    setWeight('');
    setHeight('');
    setImc(null);
    setClassification('');
    setError('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>

      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />

      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={calculateIMC}>
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={resetFields}>
        <Text style={styles.buttonText}>Limpar</Text>
      </TouchableOpacity>

      {imc && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Seu IMC: {imc}</Text>
          <Text style={styles.classificationText}>Classificação: {classification}</Text>
        </View>
      )}

      <View style={styles.tableContainer}>
        <Text style={styles.tableTitle}>Tabela de Classificação</Text>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>IMC</Text>
          <Text style={styles.tableHeader}>Classificação</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Abaixo de 18,5</Text>
          <Text style={styles.tableCell}>Abaixo do peso</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>18,5 a 24,9</Text>
          <Text style={styles.tableCell}>Peso normal</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>25 a 29,9</Text>
          <Text style={styles.tableCell}>Sobrepeso</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>30 a 34,9</Text>
          <Text style={styles.tableCell}>Obesidade grau I</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>35 a 39,9</Text>
          <Text style={styles.tableCell}>Obesidade grau II</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>40 ou mais</Text>
          <Text style={styles.tableCell}>Obesidade grau III</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  resetButton: {
    backgroundColor: '#f44336',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginBottom: 15,
    textAlign: 'center',
  },
  resultContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#e8f5e9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#c8e6c9',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: '#2e7d32',
  },
  classificationText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#1b5e20',
  },
  tableContainer: {
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
  },
  tableTitle: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tableHeader: {
    flex: 1,
    padding: 10,
    fontWeight: 'bold',
    backgroundColor: '#e8f5e9',
    textAlign: 'center',
  },
  tableCell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#fff',
  },
});

export default IMCCalculator;