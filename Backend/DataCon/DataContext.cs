using Class1.Models;
using Microsoft.EntityFrameworkCore;
using System.Data;
 
 


namespace Class1.DataCon
{
    public class DataContext :DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base (options){}
        
         public  DbSet<User> users {get;set;}
         


    }
}