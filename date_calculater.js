function Today_String_Getter()
{
    const today_ms    = new Date();
    const today_year  = today_ms.getFullYear();
    const today_month = today_ms.getMonth() + 1;
    const today_date  = today_ms.getDate();

    const today_string = String( today_year + "/" + today_month + "/" + today_date);
    return today_string;
}

function Calculate_Difference_BaseDay_Today()
{
    const base_day   = new Date("2020/03/16");
    const today      = Date.parse(Today_String_Getter());
    const one_day_ms = 86400000;
    
    return (Math.abs(base_day - today))/one_day_ms;
}