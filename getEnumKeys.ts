const getEnumKeys = <T>(enumeratedValue: T) => {
    return (Object.keys(enumeratedValue) as (keyof typeof enumeratedValue)[])
        .filter((value) => typeof value === 'string' && isNaN(Number(value)))
} 
export default getEnumKeys