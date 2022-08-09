export interface SensorEntry {
    id: string;
    last_status_updated_at: string;
    battery_level: number;
}

export type Sensors = Array<SensorEntry>;