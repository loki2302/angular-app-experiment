package me.loki2302.be.commands;

import lombok.AllArgsConstructor;
import lombok.ToString;

@ToString
@AllArgsConstructor
public class CreateUserCommand {
    public final String name;
}
