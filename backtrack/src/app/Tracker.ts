
export class Tracker{
    name: string;
    type: string;
    distance: number;
    address: string;

    constructor(private trackerName: string, private trackerType: string, trackerDistance: number, trackerAddress: string){
        this.name = trackerName;
        this.type = trackerType;
        this.distance = trackerDistance;
        this.address = trackerAddress;
    }
}