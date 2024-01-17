export async function GetAPI1() {
    const res = await fetch(`${process.env.BPS_API_URL}/api1`)

    return res.json()
}

export async function GetAPI2() {
    const res = await fetch(`${process.env.BPS_API_URL}/api2`)

    return res.json()
}

export async function GetAPI3() {
    const res = await fetch(`${process.env.BPS_API_URL}/api3`)

    return res.json()
}

export async function GetAPI4() {
    const res = await fetch(`${process.env.BPS_API_URL}/api4`)

    return res.json()
}

export async function GetAPI5() {
    const res = await fetch(`${process.env.BPS_API_URL}/api5`)

    return res.json()
}

export async function GetAPI6() {
    const res = await fetch(`${process.env.BPS_API_URL}/api6`)

    return res.json()
}

export async function getAllData(pathName) {
    const res = await fetch(`${process.env.BPS_API_URL}/${pathName}`)

    return res.json()
}