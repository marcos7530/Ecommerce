using Core.Entities;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic.Data
{
    public class SeguridadDbContextData 
    {
        
        public static async Task SeedUserAsync(UserManager<Usuario> userManager, RoleManager<IdentityRole> roleManager) {

            if (!userManager.Users.Any()) {
                var usuario = new Usuario
                {
                    Nombre = "Marcos",
                    Apellido = "Campos",
                    UserName = "Marcos",
                    Direccion = new Direccion
                    {
                        Calle = "Isabel la Catolica 2682",
                        Ciudad = "Tucuman",
                        CodigoPostal = "4115",
                        Departamento = "San Miguel de tucuman",
                    }
                };

                string password = "MArcos@7530";

                await userManager.CreateAsync(usuario, password);
            }


            //if (!roleManager.Roles.Any()) {
            //    var role = new IdentityRole
            //    {
            //        Name = "ADMIN"
            //    };
            //    await roleManager.CreateAsync(role);
            //}


        }

    }
}
