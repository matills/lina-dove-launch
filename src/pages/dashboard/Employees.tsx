import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, User, Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Employees = () => {
  const employees = [
    { 
      id: 1, 
      name: "Laura Sánchez", 
      role: "Estilista Senior", 
      status: "Activo",
      schedule: "Lun-Vie 9:00-18:00",
      services: ["Corte", "Coloración", "Peinado"]
    },
    { 
      id: 2, 
      name: "Roberto Díaz", 
      role: "Barbero", 
      status: "Activo",
      schedule: "Mar-Sáb 10:00-19:00",
      services: ["Corte Caballero", "Barba", "Afeitado"]
    },
    { 
      id: 3, 
      name: "Sofía Ramírez", 
      role: "Manicurista", 
      status: "Descanso",
      schedule: "Lun-Vie 10:00-17:00",
      services: ["Manicure", "Pedicure", "Uñas Gel"]
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Empleados</h1>
          <p className="text-muted-foreground">Gestiona tu equipo de trabajo</p>
        </div>
        <Button>
          <Plus className="h-5 w-5 mr-2" />
          Nuevo Empleado
        </Button>
      </div>

      <div className="grid gap-6">
        {employees.map((employee) => (
          <Card key={employee.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>{employee.name}</CardTitle>
                    <CardDescription>{employee.role}</CardDescription>
                  </div>
                </div>
                <Badge variant={employee.status === "Activo" ? "default" : "secondary"}>
                  {employee.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Clock className="h-4 w-4" />
                    <span className="font-medium">Horario:</span>
                  </div>
                  <p className="text-sm text-foreground">{employee.schedule}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium">Servicios:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {employee.services.map((service, index) => (
                      <Badge key={index} variant="outline">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Employees;
