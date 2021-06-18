import { StyleSheet, Text, View } from 'react-native';

export class Relogio {
    constructor() {
        constructor(props); {
            this.state = {
                date: new Date(),
                teacher: false
            };
        }

        tick(); {
            this.setState({
                date: new Date()
            });
        }

        componentDidMount(); {
            this.timerID = setInterval(
                () => this.tick(),
                1000 //1 segundo
            );
        }

        componentWillUnmount(); {
            clearInterval(this.timerID);
        }

        render(); {
            return (
                <View style={styles.container}>
                    <Text style={styles.text}>Olá, Mundo! :D</Text>
                    <Text style={styles.clock}>{this.state.date.toLocaleTimeString()}</Text>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginTop: 50,
  },
  clock: {
    fontSize: 50,
    marginTop: 50,
  },
});

export default Relogio;