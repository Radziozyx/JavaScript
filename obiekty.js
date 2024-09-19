const samochod = {
    marka: "Toyota",
    model: "Corolla",
    rok: 2020,
    opis: function() {
        return `Samochód to ${this.marka} ${this.model} z ${this.rok}.`;
    }
};


console.log(samochod.opis());
