
export class Tracker{
    name: string;
    type: string;
    txPower: number;
    address: string;

    constructor(private trackerName: string, private trackerType: string, trackerTxPower: number, trackerAddress: string){
        this.name = trackerName;
        this.type = trackerType;
        this.txPower = trackerTxPower;
        this.address = trackerAddress;
    }
}