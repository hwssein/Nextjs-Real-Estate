import moment from "moment-jalaali";

const e2p = (s) => s.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

const p2e = (s) =>
  s.toString().replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));

const convertToISO = (shamsiDate) => {
  const englishDate = p2e(shamsiDate);

  const isoDate = moment(englishDate, "jYYYY/jMM/jDD").format("YYYY-MM-DD");

  return isoDate;
};

const sp = (number) => {
  const seperatedNumber = number
    .toString()
    .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
  const joinedNumber = seperatedNumber.join(",");
  return e2p(joinedNumber);
};

export { e2p, p2e, sp, convertToISO };
