import { Column, Entity } from "typeorm";

@Entity()
export class mails {
    @Column({ nullable: true })
    from: string;
    
    @Column({ nullable: true })
    to: string;
    
    @Column({ nullable: true })
    cc: string;
    
    @Column({ nullable: true })
    bcc: string;
    
    @Column({ nullable: true })
    subject: string;
    
    @Column({ nullable: true })
    text: string;
    
    @Column({ nullable: true })
    html: string;
    
    @Column({ nullable: true })
    attachments: string;
    
    @Column({ nullable: true })
    username: string;
}