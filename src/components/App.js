import React, { Component } from 'react'
import KeysContainer from './KeysContainer'
import Preview from './Preview'
import Toolbar from './Toolbar'
import { bankOne, bankTwo } from '../data'

class App extends Component {
    constructor(props) {
        super(props)
        
        this.state = {        
            currentBank : bankOne,
            bankNum : 1,
            currentKeyId : '♫♫♫',
            volumeLevel : 0.5
        }
    }  
  
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress)
    }
    
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress)
    }

    getVolume = (volume) => {
        let level = (volume/100);
        this.setState({volumeLevel : level })
    }

    handleKeyPress = e => {
        this.playSound(e.keyCode);
    }

    playSound = (keyCode) => {
        let keyTrigger = null;
        let keyId = null
        switch(keyCode){
            case 81 :
                keyTrigger = 'Q';
                this.state.bankNum === 1 ? keyId = "Heater-1" : keyId = "Chord-1";
                break;
            case 87 :
                keyTrigger = 'W';
                this.state.bankNum === 1 ? keyId = "Heater-2" : keyId = "Chord-2";
                break;
            case 69 :
                keyTrigger = 'E';
                this.state.bankNum === 1 ? keyId = "Heater-3" : keyId = "Chord-3";
                break;
            case 65 :
                keyTrigger = 'A';
                this.state.bankNum === 1 ? keyId = "Heater-4" : keyId = "Shaker";
                break;
            case 83 :
                keyTrigger = 'S';
                this.state.bankNum === 1 ? keyId = "Clap" : keyId = "Open-HH";
                break;
            case 68 :
                keyTrigger = 'D';
                this.state.bankNum === 1 ? keyId = "Open-HH" : keyId = "Closed-HH";
                break;
            case 90 :
                keyTrigger = 'Z';
                this.state.bankNum === 1 ? keyId = "Kick-n'-Hat" : keyId = "Punchy-Kick";
                break;
            case 88 :
                keyTrigger = 'X';
                this.state.bankNum === 1 ? keyId = "Kick" : keyId = "Side-Stick";
                break;
            case 67 :
                keyTrigger = 'C';
                this.state.bankNum === 1 ? keyId = "Closed-HH" : keyId = "Snare";
                break;
            default :
                return;
        }
        const sound = document.getElementById(keyTrigger);
        if(sound){
            this.setState({currentKeyId : keyId})
            sound.currentTime = 0;
            
            sound.volume = this.state.volumeLevel;
            sound.play();
        }
    }

    handleBankOne = () => {
        this.setState({
            currentBank : bankOne,
            bankNum : 1
        })
    }
    handleBankTwo = () => {
        this.setState({
            currentBank : bankTwo,
            bankNum : 2
        })
    }
    getId = id => {
        let keyCode = null;
        switch(id){
            case "Heater-1" :
            case "Chord-1" :
                keyCode = 81;
                break;
            case "Heater-2" :
            case  "Chord-2" :
                keyCode = 87;
                break;
            case "Heater-3" :
            case  "Chord-3" :
                keyCode = 69;
                break;
            case "Heater-4" :
            case  "Shaker" :
                keyCode = 65;
                break;
            case "Clap" :
            case  "Open-HH" :
                keyCode = 83;
                break;
            case "Open-HH" :
            case  "Closed-HH" :
                keyCode = 68;
                break;
            case "Kick-n'-Hat" :
            case  "Punchy-Kick" :
                keyCode = 90;
                break;
            case "Kick" :
            case  "Side-Stick" : 
                keyCode = 88;
                break;            
            case "Closed-HH" :
            case  "Snare" :
                keyCode = 67;
                break;
            default :
                console.log(id);
        }
        this.playSound(keyCode);
        this.setState({
            currentKeyId : id
        })
    }    

    render() {
        return (
            <div id='drum-machine' className='bg-secondary text-center container'>
                <Preview text={this.state.currentKeyId}/>
                <Toolbar 
                    bankNum={this.state.bankNum} 
                    handleBankOne={this.handleBankOne} 
                    handleBankTwo={this.handleBankTwo}
                    getVolume={this.getVolume} 
                />
                <KeysContainer 
                    keysList={this.state.currentBank}
                    getId={this.getId}
                />
            </div>
        )
    }
}

export default App
