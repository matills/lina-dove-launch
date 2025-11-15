import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Plus, Clock, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Appointments = () => {
  const appointments = [
    { id: 1, client: "Juan Pérez", service: "Corte de Cabello", time: "10:00 AM", date: "Hoy", status: "Confirmado" },
    { id: 2, client: "María García", service: "Manicure", time: "11:30 AM", date: "Hoy", status: "Pendiente" },
    { id: 3, client: "Carlos López", service: "Masaje", time: "2:00 PM", date: "Hoy", status: "Confirmado" },
    { id: 4, client: "Ana Martínez", service: "Corte de Cabello", time: "3:30 PM", date: "Mañana", status: "Confirmado" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Turnos</h1>
          <p className="text-muted-foreground">Gestiona tus citas y horarios</p>
        </div>
        <Button>
          <Plus className="h-5 w-5 mr-2" />
          Nuevo Turno
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Hoy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">8 turnos</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Esta Semana</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">47 turnos</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pendientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">3 turnos</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Próximos Turnos</CardTitle>
          <CardDescription>Turnos programados para los próximos días</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{appointment.client}</p>
                    <p className="text-sm text-muted-foreground">{appointment.service}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {appointment.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {appointment.time}
                    </div>
                  </div>
                  <Badge variant={appointment.status === "Confirmado" ? "default" : "secondary"}>
                    {appointment.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Appointments;
