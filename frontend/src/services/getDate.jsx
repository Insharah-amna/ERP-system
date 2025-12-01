import {DateTime} from "luxon"

export default function getDate() {
  const date = DateTime.now().toFormat("MMM dd, yyyy");

  return date;
}


