export async function GetAPI1() {
    const res = await fetch(`${process.env.API_URL}?hwid=5729708&token=NTcyOTcwOC1lYm94&OUT1=0`, { cache: 'no-cache'})

    return res.json()
}

export async function GetAPI2() {
    const res = await fetch(`${process.env.API_URL}?hwid=5729708&token=NTcyOTcwOC1lYm94&IN1&IN2&IN3&IN4`, { cache: 'no-cache'})

    return res.json()
}

export async function GetAPI3() {
    const res = await fetch(`${process.env.API_URL}?hwid=5729708&token=NTcyOTcwOC1lYm94&IN1&IN2&IN3&IN4&OUT4=1`, { cache: 'no-cache'})

    return res.json()
}

export async function GetAPI4() {
    const res = await fetch(`${process.env.API_URL}?hwid=5729708&token=NTcyOTcwOC1lYm94&IN1&IN2&IN3&IN4&p221&p222`, { cache: 'no-cache'})

    return res.json()
}

export async function GetAPI5() {
    const res = await fetch(`${process.env.API_URL}?hwid=5736428&token=NTczNjQyOC1lYm94&IN1&time&p001&p002&p003&p004&p005&p006&p007&p008&p009&p010&p011&p012&p013&p014&p015&p016&p017&p018&p019&p020`, { cache: 'no-cache'})

    return res.json()
}

export async function GetAPI6() {
    const res = await fetch(`${process.env.API_URL}?hwid=5729708&token=NTcyOTcwOC1lYm94&s201&s202&s203&s204&s205&s206&s207&s208&s209&s210`, { cache: 'no-cache'})

    return res.json()
}