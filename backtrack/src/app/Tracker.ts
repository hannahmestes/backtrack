
export class Tracker{
    name: string;
    type: string;
    txPower: number;
    address: string;
    distance: number;

    constructor(private trackerName: string, private trackerType: string, trackerTxPower: number, trackerAddress: string, trackerDistance: number){
        this.name = trackerName;
        this.type = trackerType;
        this.txPower = trackerTxPower;
        this.address = trackerAddress;
        this.distance = trackerDistance;
    }
}