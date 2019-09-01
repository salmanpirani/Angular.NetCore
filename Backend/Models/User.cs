using System.ComponentModel.DataAnnotations;

namespace Class1.Models
{
    public class User
    {
        [Key]
        public int id{get;set;}   
        [Required]
        public int name { get; set; }   
        public int nationalid { get; set; }  

        public string Email { get; set; }

 [Required]
        public  string password {get;set;}
         
        
    }
}