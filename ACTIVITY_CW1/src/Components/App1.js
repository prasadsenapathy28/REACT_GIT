import { Activity,AlarmClockIcon,Angry,Annoyed,Armchair,ArrowBigDown,Bluetooth,Citrus,Croissant,Drama,Fingerprint,Gamepad2,Gift,Gauge,Gem,Ghost} from "lucide-react";
function App1() {
  return (
    <div className="tablename">
      <table border="5" cellSpacing="0px" style={{width:'35rem', height:'35rem', textAlign:'center'}}>
           <tr>
            <td><Activity/></td>
            <td><AlarmClockIcon/></td>
            <td><Angry/></td>
            <td><Annoyed/></td>
           </tr>
           <tr>
            <td><Armchair/></td>
            <td><ArrowBigDown/></td>
            <td><Bluetooth/></td>
            <td><Citrus/></td>
           </tr>
           <tr>
            <td><Croissant/></td>
            <td><Drama/></td>
            <td><Fingerprint/></td>
            <td><Gamepad2/></td>
           </tr>
           <tr>
            <td><Gift/></td>
            <td><Gauge/></td>
            <td><Gem/></td>
            <td><Ghost/> </td>
           </tr>
      </table>
    </div>
  );
}

export default App1;
