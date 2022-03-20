function musky() {
    let musketeers = ['Athos', 'Porthos', 'Aramis'];

    for (let i = 0; i < musketeers.length; i++) {
        console.log(musketeers[i])
    }

    musketeers.push("D'Artagnan")

    musketeers.forEach(value => {
        console.log(value)
    })

    musketeers.splice(2, 1)

    for (const value of musketeers) {
        console.log(value)
    }
}
musky();