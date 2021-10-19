
namespace DigitalClockCSharp
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.lblTime = new System.Windows.Forms.Label();
            this.lblSecond = new System.Windows.Forms.Label();
            this.lblDate = new System.Windows.Forms.Label();
            this.lblDay = new System.Windows.Forms.Label();
            this.timer1 = new System.Windows.Forms.Timer(this.components);
            this.SuspendLayout();
            // 
            // lblTime
            // 
            this.lblTime.AutoSize = true;
            this.lblTime.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.lblTime.Font = new System.Drawing.Font("Cooper Black", 48F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblTime.ForeColor = System.Drawing.SystemColors.Control;
            this.lblTime.Location = new System.Drawing.Point(12, 88);
            this.lblTime.Name = "lblTime";
            this.lblTime.Size = new System.Drawing.Size(228, 76);
            this.lblTime.TabIndex = 0;
            this.lblTime.Text = "label1";
            // 
            // lblSecond
            // 
            this.lblSecond.AutoSize = true;
            this.lblSecond.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.lblSecond.Font = new System.Drawing.Font("Cooper Black", 24F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblSecond.ForeColor = System.Drawing.SystemColors.Control;
            this.lblSecond.Location = new System.Drawing.Point(323, 107);
            this.lblSecond.Name = "lblSecond";
            this.lblSecond.Size = new System.Drawing.Size(113, 38);
            this.lblSecond.TabIndex = 1;
            this.lblSecond.Text = "label2";
            // 
            // lblDate
            // 
            this.lblDate.AutoSize = true;
            this.lblDate.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.lblDate.Font = new System.Drawing.Font("Cooper Black", 27.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblDate.ForeColor = System.Drawing.SystemColors.Control;
            this.lblDate.Location = new System.Drawing.Point(32, 300);
            this.lblDate.Name = "lblDate";
            this.lblDate.Size = new System.Drawing.Size(130, 44);
            this.lblDate.TabIndex = 2;
            this.lblDate.Text = "label3";
            // 
            // lblDay
            // 
            this.lblDay.AutoSize = true;
            this.lblDay.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.lblDay.Font = new System.Drawing.Font("Cooper Black", 18F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblDay.ForeColor = System.Drawing.SystemColors.Control;
            this.lblDay.Location = new System.Drawing.Point(323, 312);
            this.lblDay.Name = "lblDay";
            this.lblDay.Size = new System.Drawing.Size(88, 29);
            this.lblDay.TabIndex = 3;
            this.lblDay.Text = "label4";
            // 
            // timer1
            // 
            this.timer1.Interval = 1000;
            this.timer1.Tick += new System.EventHandler(this.timer1_Tick);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.ControlText;
            this.ClientSize = new System.Drawing.Size(551, 451);
            this.Controls.Add(this.lblDay);
            this.Controls.Add(this.lblDate);
            this.Controls.Add(this.lblSecond);
            this.Controls.Add(this.lblTime);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Name = "Form1";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label lblTime;
        private System.Windows.Forms.Label lblSecond;
        private System.Windows.Forms.Label lblDate;
        private System.Windows.Forms.Label lblDay;
        private System.Windows.Forms.Timer timer1;
    }
}

