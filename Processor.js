class Processor{
    static Process(data){
        var br = data.split("\r\n");
        var rows = [];

        br.forEach(row => {
            var arr = row.split(",");
            rows.push(arr);
        });

        return(rows)
    }
}

module.exports = Processor