function angryProfessor(k, a) {
    let onTime = a.filter(margin => margin < 1).length
    console.log(onTime)
    return onTime < k ? `YES` : `NO`
}