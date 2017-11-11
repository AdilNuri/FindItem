using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HtmlAgilityPack;
using System.IO;
using static System.Console;

namespace HTML_Parsesr
{
    class Item
    {
        public string name;
        public string img_url;
        public string alt_text;
        public string wiki_url;
        public int[] from;
        public int[] into;
        public int from_length = 0;
        public int into_length = 0;
        public override string ToString()
        {
            StringBuilder from_names = new StringBuilder("");
            StringBuilder into_names = new StringBuilder("");
            for (int i=0;i<from_length; i++)
            {
               
                from_names.Append(Program.items[from[i]].name);
                from_names.Append("\r\n");
            }
            for (int i = 0; i<into_length; i++)
            {
             
                into_names.Append(Program.items[into[i]].name);
                into_names.Append("\r\n");
            }
            return $"Name {name}" +"\r\nfrom:\r\n"+from_names+"into:\r\n"+into_names;
        }
        public string ToJson()
        {
            StringBuilder json = new StringBuilder( "{\r\n");
            json.Append(@"""name"":"+'"'+this.name+ '"'+",\r\n");          
            json.Append(@"""url"":" + '"'+this.wiki_url + '"'+ ",\r\n");
            json.Append(@"""alt_text"":" + '"'+this.alt_text + '"'+ ",\r\n");
            json.Append(@"""img_url"":" + '"' + this.img_url + '"' + ",\r\n");
            json.Append(@"""from"":[");
            for (int i = 0; i < from_length; i++)
            {
              
                json.Append(from[i]).Append((i+1<from_length?",":""));
            }
            json.Append("],\r\n");
            json.Append(@"""into"":[");
            for (int i = 0; i < into_length; i++)
            {

                json.Append(into[i]).Append((i + 1 < into_length ? "," : ""));
            }
            json.Append("]\r\n");
            json.Append("}");
            return json.ToString();
        }
    }
    
    class Program
    {
        public static Item[] items = new Item[150];
        public static int index = 0;
        public static Dictionary<string, int> Included = new Dictionary<string, int>();
        public static string base_url = "https://dota2.gamepedia.com";
        public static int current = 0;
       
        static void Main(string[] args)
        {
            
            string url = "/Linken%27s_Sphere";
            Parse(url);
            for (int i=0;i<index;i++)
            {
                WriteLine(items[i]);
            }
            File.WriteAllText(@"C:\Users\Welcome\Downloads\items.json", ToJson());
            Console.ReadKey(true);
        }

        private static int Parse(string url)
        {
            
            if (Included.ContainsKey(url))
                return Included[url];
            //if (current >= 10)
            //    return -1;
            //current++;
            string full_url = base_url + url;
            int local_index = index;
            
            Item item = new Item();
            var web = new HtmlWeb();
            var doc = web.Load(full_url);
            var td = doc.DocumentNode.Descendants("table").Where(x => x.Attributes.Contains("class") &&
                                                    x.Attributes["class"].Value.Contains("infobox")).First()
                                                    .Elements("tr").Last().Descendants("td").Last();
            var el =td.Element("a");
            item.alt_text = el.Element("img").Attributes["alt"].Value;
            item.img_url = el.Element("img").Attributes["src"].Value;
            item.name = doc.GetElementbyId("firstHeading").InnerText;
            item.wiki_url = full_url;
            item.from = Enumerable.Repeat(-1, 10).ToArray();
            item.into = Enumerable.Repeat(-1, 10).ToArray();
            WriteLine(item.name);
            WriteLine(item.wiki_url);
            WriteLine(item.alt_text);
            WriteLine(item.img_url);
            items[local_index] = item;            
            Included.Add(url, index);
            index++;
            var into = td.ChildNodes.Where(ch => ch.Name != "#text" && ch.Name != "img").First();
            if (into.Name == "div")
            {
                var inner = into.Element("div");
                
                int i = 0;
                foreach (var e in inner.Elements("div"))
                {
                    var next = e.Element("a").Attributes["href"].Value;
                    if (NotBanned(next))
                    {
                        items[local_index].into[i] = Parse(next);
                        i++;
                    }
                }
                items[local_index].into_length = i;
            }
            var from = td.ChildNodes.Where(ch => ch.Name != "#text" && ch.Name != "img").Last();
            if (from.Name == "div")
            {
                
                var inner = from.Element("div");
                
                int i = 0;
                foreach (var e in inner.Elements("div"))
                {
                    var next = e.Element("a").Attributes["href"].Value;
                    if (NotBanned(next))
                    {
                        items[local_index].from[i] =  Parse(next);
                        i++;
                    }
                }
                items[local_index].from_length = i;
            }


            //foreach(var elem in td.ChildNodes.Where(ch=>ch.Name!="#text"))
            //{
            //    WriteLine(elem.Name);
            //}

            return local_index;
        }
        static bool NotBanned(string name)
        {
            name = name.ToLower();
            if (name == "/recipe")
                return false;
            string[] banned =new string[]{"/dagon", "/diffusal_blade", "/necronomicon", "/boots_of_travel"};
            for (int i = 0; i < banned.Length; i++)
            {
                if (name.Contains(banned[i]) && name.Length > banned[i].Length)
                    return false;
            }
           
            return true;

        }
        static string ToJson()
        {
            StringBuilder json = new StringBuilder("[");
            for (int i = 0; i < index; i++)
            {
                json.Append(items[i].ToString()).Append((i+1<index?",":""));

            }
            json.Append("]");
            return json.ToString();
        }

    }
}
