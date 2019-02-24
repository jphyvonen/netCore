using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RiihiSoftReact.Models
{
    public class Feedback
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string Freetext { get; set; }
        public string TimeGiven { get; set; } = DateTime.Now.ToShortDateString();
    }
}
