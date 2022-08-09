/* eslint-disable react-hooks/exhaustive-deps */
import { Dispatch, SetStateAction, useMemo, useState } from 'react'
import { SensorEntry } from '../../../types/sensors'

const useSearch = (sensorsList: SensorEntry[]): [SensorEntry[], Dispatch<SetStateAction<string>>] => {
  const [searchPhrase, setSearchPhrase] = useState('')
  const result = useMemo(
    () => sensorsList.filter(sensor => sensor.id.includes(searchPhrase)),
    [searchPhrase, JSON.stringify(sensorsList)]
  )
  return [result, setSearchPhrase];
}

export default useSearch;