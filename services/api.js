import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://ceqjstcgucykcfwetexy.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlcWpzdGNndWN5a2Nmd2V0ZXh5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MjYwNzMyMCwiZXhwIjoxOTk4MTgzMzIwfQ.SWaM2jxUllfKbOSkE00kYGSi6-YfzqQ669cJ82EGnqI",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlcWpzdGNndWN5a2Nmd2V0ZXh5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MjYwNzMyMCwiZXhwIjoxOTk4MTgzMzIwfQ.SWaM2jxUllfKbOSkE00kYGSi6-YfzqQ669cJ82EGnqI"
    }
})



