import { NextResponse } from "next/server";

function createData(brand, manufacturer, price, count, image) {
  return { brand, manufacturer, price, count, image };
}

const dummyData = [
  createData(
    "Honda Civic 2024",
    "Honda",
    616800000,
    12,
    "https://www.honda-indonesia.com/glide/2024/01/15/9p9PgwpLeE2QrVr1boT2EzpGP3nXPi7QnBKTVv9L.jpg?w=900&s=57b26b19b661ba8a8d4fca052ae4a4d1"
  ),
  createData(
    "Honda City Hatchback 2022",
    "Honda",
    220000000,
    15,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZhXFWO7F4bewjrETytKbv-2LH9jzKFQAp2sBTOthvDDhmSk0Kps3Gmw8WhFS2by2cmtU&usqp=CAU"
  ),
  createData(
    "Suzuki Jimny 5 doors 2022",
    "Suzuki",
    430000000,
    10,
    "https://pict.sindonews.net/dyn/850/pena/news/2022/04/25/120/753337/belum-dibuat-30-orang-sudah-keluarkan-uang-beli-suzuki-jimny-5-pintu-ggg.jpg"
  ),
];

// To handle a GET request to /api/cars
export async function GET(request) {
  // Do whatever you want
  return NextResponse.json(
    { message: "success", data: dummyData },
    { status: 200 }
  );
}
