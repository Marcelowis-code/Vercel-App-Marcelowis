export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    console.log('Datos recibidos del ESP32:', data);
    res.status(200).json({ message: 'Datos recibidos correctamente' });
  } else if (req.method === 'GET') {
    res.status(200).json({ value: Math.random() * 100 }); // Simulación de un sensor
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
