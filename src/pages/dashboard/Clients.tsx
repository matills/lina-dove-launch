import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, User, Phone, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";

const Clients = () => {
  const clients = [
    { id: 1, name: "Juan Pérez", phone: "+54 11 1234-5678", email: "juan@email.com", visits: 12 },
    { id: 2, name: "María García", phone: "+54 11 2345-6789", email: "maria@email.com", visits: 8 },
    { id: 3, name: "Carlos López", phone: "+54 11 3456-7890", email: "carlos@email.com", visits: 15 },
    { id: 4, name: "Ana Martínez", phone: "+54 11 4567-8901", email: "ana@email.com", visits: 5 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Clientes</h1>
          <p className="text-muted-foreground">Gestiona tu base de clientes</p>
        </div>
        <Button>
          <Plus className="h-5 w-5 mr-2" />
          Nuevo Cliente
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Buscar Cliente</CardTitle>
          <CardDescription>Encuentra clientes por nombre, teléfono o email</CardDescription>
        </CardHeader>
        <CardContent>
          <Input placeholder="Buscar..." />
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {clients.map((client) => (
          <Card key={client.id}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">{client.name}</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      {client.phone}
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      {client.email}
                    </div>
                    <div className="mt-2">
                      <span className="text-foreground font-medium">{client.visits}</span> visitas
                    </div>
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

export default Clients;
